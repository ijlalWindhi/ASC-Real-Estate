import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

export default function AlertNotification(props: any) {
    return (
        <Alert
            status={props.status}
            variant="left-accent"
            borderRadius={"md"}
            mt={2}
        >
            <AlertIcon />
            {props.message}
        </Alert>
    );
}
