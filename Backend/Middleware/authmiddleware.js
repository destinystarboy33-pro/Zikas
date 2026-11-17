import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Authentication required",
        status: false,
      });

      return;
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWTSECRET);

    req.admin = decoded;

    next();
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "Invalid or expired token",
      status: false,
    });
  }
};

const authorize = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.admin.role)) {
      res.status(StatusCodes.FORBIDDEN).json({
        message: "You do not have permission to access this resource",
        status: false,
      });

      return;
    }

    //  if (req.admin.role !== "admin") {
    //   return res.status(403).json({
    //     message: "Access denied. Admin only."
    //   });

    
    // }

    next();
  };
};

export { authenticate, authorize };
