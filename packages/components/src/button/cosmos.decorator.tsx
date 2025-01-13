import React, { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw'
        }}>{children}</div>
    );
}