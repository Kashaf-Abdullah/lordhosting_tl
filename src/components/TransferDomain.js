import React from "react";
import transferdata from "../img/transfer_data.svg";
const TransferDomain = () => {
  return (
    <div className="container-fluid transfer-domain">
      <div className="container td-con">
        <div className="td-left">
          <h2>Transfert de domaine</h2>
          <p>
            Soyez accompagnés lors du transfert sécurisé de votre domaine puis
            profitez de nos offres en toute simplicité !
          </p>
        </div>
        <div className="td-right">
          <img src={transferdata} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TransferDomain;
