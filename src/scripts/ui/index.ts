const resetBtn = document.getElementById("reset-btn") as HTMLInputElement;
const configModal = document.getElementById("config-modal") as HTMLInputElement;

const showResetBtn = () => {
  resetBtn.style.display = "block";
};

const hideResetBtn = () => {
  resetBtn.style.display = "none";
};

const showConfigModal = () => {
  configModal.style.display = "block";
};

const hideConfigModal = () => {
  configModal.style.display = "none";
};

export { showResetBtn, hideResetBtn, showConfigModal, hideConfigModal };
