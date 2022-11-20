import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="modal" id="config-modal">
    <p class="title">Configs</p>

    <div class="input-wrapper">
      <label for="gridSizeSlider" class="sub-heading">Grid Size</label>
      <input
        type="range"
        min="10"
        max="100"
        step="1"
        value="35"
        name="gridSizeSlider"
        id="gridSizeSlider"
      />
    </div>

    <div class="input-wrapper" id="show-grid-input-wrapper">
      <label for="show-grid" class="sub-heading cp">Show Grid</label>
      <input type="checkbox" checked="true" name="showGrid" id="show-grid" class="cp" />
    </div>

    <div class="input-wrapper">
      <p class="sub-heading">Seed</p>
      <div id="seed-wrapper">
        <button data-seed-type="blinker" id="blinker">Blinker</button>
        <button data-seed-type="glider" id="glider">Glider</button>
        <button data-seed-type="beacon" id="beacon">Beacon</button>
        <button data-seed-type="pulsar" id="pulsar">Pulsar</button>
        <button data-seed-type="pentaDecathlon" id="penta-decathlon">Penta- decathlon</button>
        <button data-seed-type="custom" id="custom-btn">Custom</button>
      </div>
    </div>

    <div class="input-wrapper">
      <button id="start-btn">START</button>
    </div>
  </div>

  <button class="bottom-btn" id="reset-btn">RESSET</button>
  <button class="bottom-btn" id="custom-start-btn">START</button>

  <canvas id="canvas"></canvas>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
