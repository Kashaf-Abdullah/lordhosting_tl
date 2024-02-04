import React from 'react'
import PricingServerCard from './Cards/PricingServerCard'
import PricingTableCard from './Cards/PricingTableCard'

const PricingServer = () => {
  return (
    <div  id="price_ser">
       <PricingServerCard
       head="DÉDIÉ START"
       text="Tout le nécessaire au meilleur prix"
       price="90€ / mois TTC"
       process1="DUAL XEON E5"
       process2="2620 V2"
       stock1="2000 GO"
       stock2="SSD"
       mem1="256 GO"
       mem2="RAM DDR3 ECC"
       band="750 Mbps"
       det="Inclus avec votre serveur dédié"
       l1="Processeur Dual Xeon E5 2620 V2"
       l2="CPU 12c / 24 threads 2.6 GHz"
       l3="Bande passante 500Mpbs"
       l4=" Protection Anti DDOS"
       l5="Support"
       bcolor="var(--darkblue)"
       tcolor="white"

      />
       <PricingServerCard
       head="DÉDIÉ GAME"
       text="
Tout le nécessaire au meilleur prix"
       price="135€ / mois TTC"
       process1="XEON E5"
       process2="2670"
       stock1="1000 GO"
       stock2="SSD"
       mem1="128 GO"
       mem2="RAM DDR3 ECC"
       band="500 Mbps"
       det="Inclus avec votre serveur dédié"
       l1="Processeur Dual Xeon E5 2620 V2"
       l2="CPU 12c / 24 threads 2.6 GHz"
       l3="Bande passante 500Mpbs"
       l4=" Protection Anti DDOS"
       l5="Support"
       bcolor="var(--lightgrey)"
       tcolor="var(--darkblue)"
      />
       <PricingServerCard
      head="DÉDIÉ PRO"
       text="Tout le nécessaire au meilleur prix"
       price=" 165€ / mois TTC"
       process1="DUAL XEON E5"
       process2="2620 V2"
       stock1="2000 GO"
       stock2="SSD"
       mem1="256 GO"
       mem2="RAM DDR3 ECC"
       band="750 Mbps"
       det="Inclus avec votre serveur dédié"
       l1="Processeur Dual Xeon E5 2620 V2"
       l2="CPU 12c / 24 threads 2.6 GHz"
       l3="Bande passante 500Mpbs"
       l4=" Protection Anti DDOS"
       l5="Support"
       bcolor="var(--darkblue)"
       tcolor="white"
      
      />
     
    </div>
  )
}

export default PricingServer
