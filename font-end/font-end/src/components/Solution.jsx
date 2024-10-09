import React from "react";
import { useParams } from "react-router-dom";
const Solution = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="mt-32 max-w-[1000px] mx-auto">
      <h1 className="font-bold text-2xl">Lets analyze the disease {id}</h1>
      <div className="description mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a vero
        deserunt, impedit facere laborum voluptas labore explicabo quisquam
        recusandae fuga praesentium incidunt? Dignissimos fugiat vel adipisci
        vero expedita eum! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Porro fugiat animi reprehenderit consequuntur et soluta sed iste
        asperiores officiis fugit officia, minima a facere, voluptas dolore eos
        ipsam repudiandae blanditiis. Quod sit numquam, animi totam temporibus
        corporis ratione nihil similique?
      </div>

      <div className="images mt-5 grid grid-cols-4">
        <div className="h-20 w-30">
          <img src="" alt="1" />
        </div>
        <div>
          <img src="" alt="2" />
        </div>
        <div>
          <img src="" alt="3" />
        </div>
        <div>
          <img src="" alt="4" />
        </div>
      </div>

      <div className="solution">
          <div className="medications">

            <div className="info">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi doloribus, ab cupiditate corporis vitae iusto ullam. Neque, atque accusantium!</p>
            </div>
            <div className="product-images">
              <img src="" alt="1" />

            </div>

          </div>

      </div>
    </div>
  );
};

export default Solution;
