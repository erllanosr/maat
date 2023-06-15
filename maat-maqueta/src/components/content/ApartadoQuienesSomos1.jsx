import React from "react";
import fotoMario from "../../resources/img/MarioFoto.png";
import fotoSergio from "../../resources/img/SergioFoto.png";
import fotoManuel from "../../resources/img/ManuelFoto.png";
import fotoJorge from "../../resources/img/JorgeFoto.png";
import fotoBruno from "../../resources/img/BrunoFoto.png";

function ApartadoQuienesSomos1() {
  return (
    <div class="mb-16">
      <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-10">
        <div class="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <span class="relative">What is MAAT?</span>
            </span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg text-justify">
            At <strong>Maat</strong>, our website dedicated to improving corporate social responsibility (<strong>CSR</strong>) of companies through events that fulfill at least one <strong>Sustainable Development Goal</strong> (<strong>SDG</strong>), we draw inspiration from the ancient wisdom of the Greek goddess <em>Maat</em>. The choice of the name <em>Maat</em> for our platform was not accidental; we wanted to convey the fundamental values that guide our work: justice, truth, and cosmic harmony.
            <br />
            <br />
            The goddess <em>Maat</em> personifies justice and balance in Greek mythology. She represents the idea that all actions should be carried out in harmony with the universal principles of truth and fairness. Her timeless symbolism and influence on culture have endured throughout the centuries. By adopting the name <em>Maat</em>, we seek to channel her symbolic power and apply it to the modern business realm.
            <br />
            <br />
            Our vision is to drive significant change in the business world by promoting sustainable practices that contribute to the improvement of society and the environment. We firmly believe that companies have a responsibility to lead the way towards a more just and equitable future. By focusing on the United Nations' <strong>SDGs</strong>, we commit to working collaboratively with businesses to identify and organize events that promote the achievement of these goals.
            <br />
            <br />
            At <strong>Maat</strong>, we understand that <strong>CSR</strong> is not just an option but an urgent necessity in today's business landscape. Our platform provides a unique opportunity for companies to stand out and generate a positive impact in their surroundings. Through events focused on the <strong>SDGs</strong>, we not only aim to raise awareness but also foster concrete actions that transform intentions into tangible results.
            <br />
            <br />
            We are excited to embark on this journey alongside companies that share our vision and commitment to sustainability. <strong>Maat</strong> is much more than a website; it is a catalyst for positive change in the business world. We invite you to explore our platform and join us in this quest for justice, truth, and cosmic harmony through events that make a difference. Together, we can build a better future for all.
            <br />
          </p>
        </div>
      </div>
      <div class="mb-20 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-2">
        <h2 class="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
          Our team
        </h2>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div class="text-center">
            <img
              class="object-contain w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              src={fotoMario}
              alt=""
            />
            <h6 class="text-xl font-bold mb-3">MARIO GONZALEZ SOLAS</h6>
          </div>

          <div class="text-center">
            <img
              class="object-contain w-full h-40 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              src={fotoBruno}
              alt=""
            />
            <h6 class="text-xl font-bold mb-3">BRUNO PINCAS ROURA</h6>
          </div>

          <div class="text-center">
            <img
              class="object-contain w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              src={fotoSergio}
              alt=""
            />
            <h6 class="text-xl font-bold mb-3">SERGIO HERVAS ARAGON</h6>
          </div>

          <div class="text-center">
            <img
              class="object-contain w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              src={fotoJorge}
              alt=""
            />
            <h6 class="text-xl font-bold mb-3">JORGE LUIS ARCINIEGA SILVA</h6>
          </div>

          <div class="text-center">
            <img
              class="object-contain w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              src={fotoManuel}
              alt=""
            />
            <h6 class="text-xl font-bold mb-3">MANUEL ALONSO MARTIN</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartadoQuienesSomos1;
