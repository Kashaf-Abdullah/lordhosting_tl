import React from 'react'
import PricingCardWindow from './Cards/PricingCardWindow'

const PricingTableWindow = () => {
  return (
    <div  id="price_ser">
    <PricingCardWindow
    head="Avancé"
    text="Tout le nécessaire au meilleur prix "
    price="16.99€ / mois TTC"
    process1="DUAL XEON E5"
    process2="2697 V3"
    stock1="120 GO"
    stock2="SSD"
    mem1="8 GO"
    mem2="RAM DDR3 ECC"
    band="500 Mbps"
    det="Inclus avec votre serveur dédié"
    l1="Processeur Dual Xeon E5 2620 V2"
    l2="VCPU 3.6 GHz"
    l3="Bande passante 500Mpbs"
    l4=" Protection Anti DDOS"
    l5="Support"
    bcolor="#f5eded"
    tcolor="var(--lightblue)"

   />
    <PricingCardWindow
    head="Super"
    text="Tout le nécessaire au meilleur prix"
    price="30.99€ / mois TTC"
    process1="XEON E5"
    process2="2697 V3"
    stock1="120 GO"
    stock2="SSD"
    mem1="8 GO"
    mem2="RAM DDR3 ECC"
    band="500 Mbps"
    det="Inclus avec votre serveur dédié"
    l1="Processeur Dual Xeon E5 2620 V2"
    l2="CPU 12c / 24 threads 2.6 GHz"
    l3="Bande passante 500Mpbs"
    l4=" Protection Anti DDOS"
    l5="Support"
    bcolor="var(--lightblue)"
    tcolor="var(--white)"
   />
    <PricingCardWindow
   head="Ultra"
    text="Tout le nécessaire au meilleur prix"
    price=" 55.99€ / mois TTC"
    process1="DUAL XEON E5"
    process2="2697 V2"
    stock1="120 GO"
    stock2="SSD"
    mem1="8 GO"
    mem2="RAM DDR4"
    band="500 Mbps"
    det="Inclus avec votre serveur dédié"
    l1="Processeur Dual Xeon E5 2620 V2"
    l2="VCPU 3.6 GHz"
    l3="Bande passante 500Mpbs"
    l4=" Protection Anti DDOS"
    l5="Support"
    bcolor="#f5eded"
    tcolor="var(--lightblue)"

   />
  
 </div>
  )
}

export default PricingTableWindow
