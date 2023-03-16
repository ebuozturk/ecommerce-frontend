import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import paymentSuccessAnimation from "../../lottie/paymentSuccessAnimation.json";
import paymentFailedAnimation from "../../lottie/paymentFailedAnimation.json";

const PaymentResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let { status } = useParams();

  useEffect(() => {
    if (
      location.state?.success === undefined ||
      typeof location.state.success !== "boolean"
    ) {
      navigate("/");
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: 600,
          boxShadow: 1,
          borderRadius: 3,
          p: 5,
          boxSizing: "border-box",
          gap: 2,
        }}
      >
        {status === "success" ? (
          <>
            <Lottie
              animationData={paymentSuccessAnimation}
              loop={false}
              style={{ width: 150, height: 150 }}
            />

            <Typography variant="body1">Payment Success</Typography>
            <Typography variant="body2">Order created</Typography>
            <Link to="/orders">Go to orders page</Link>
          </>
        ) : (
          <>
            <Lottie
              animationData={paymentFailedAnimation}
              loop={false}
              style={{ width: 150, height: 150 }}
            />

            <Typography variant="body1">Payment failed</Typography>
          </>
        )}
      </Box>
    </Box>
  );
};
export default PaymentResult;
