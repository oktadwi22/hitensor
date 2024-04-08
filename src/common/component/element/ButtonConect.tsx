import React from "react";
import Button from "@/common/component/element/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ButtonConect: React.FC = () => {


  return(
  <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      authenticationStatus,
      mounted,
    }) => {
      // Note: If your app doesn't use authentication, you
      // can remove all 'authenticationStatus' checks
      const ready = mounted && authenticationStatus !== 'loading';
      const connected =
        ready &&
        account &&
        chain &&
        (!authenticationStatus ||
          authenticationStatus === 'authenticated');

      return (
        <div
          {...(!ready && {
            'aria-hidden': true,
            'style': {
              opacity: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            },
          })}
        >
          {(() => {
            if (!connected) {
              return (

                <Button
                  className="!h-auto lg:!w-32 !px-1 !rounded-lg !text-lg !font-semibold"
                  onClick={openConnectModal}
                  color="default"
                  HoverColor="bg-neutral-100"
                  label={"Connect"}
                  textColor="text-white"
                />
              );
            }

            if (chain.unsupported) {
              return (
                <button onClick={openChainModal} type="button">
                  Wrong network
                </button>
              );
            }

            return (
              <div style={{ display: 'flex', gap: 12 }}>

                <Button
                  className="!h-auto !px-1 lg:!w-36 !rounded-lg !text-lg !font-semibold"
                  onClick={openAccountModal}
                  color="default"
                  HoverColor="bg-neutral-100"
                  label={account.displayName}
                  textColor="text-white"
                />
              </div>
            );
          })()}
        </div>
      );
    }}
  </ConnectButton.Custom>
  );
}
  export default ButtonConect;
