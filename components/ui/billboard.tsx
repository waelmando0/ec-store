import React from "react"

import { Billboard as BillboardType } from "@/types/types"

interface BillboardProps {
  data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
      >
        <div
          className="flex items-center  justify-center h-full w-full text-center"
          style={{ background: `rgba(0, 0, 0, 0.5 )` }}
        >
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billboard
