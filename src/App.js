import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step === 1) return;
    setStep((st) => st - 1);
  }
  function handleNext() {
    if (step === 3) return;
    setStep((st) => st + 1);
  }

  return (
    // style={{ position: 'relative', height: '233px' }}
    <div>
      <button className='close' onClick={() => setIsOpen((v) => !v)}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <Button
              textColor='#fff'
              bgColor='#7950f2'
              onClick={handlePrevious}
              content='previous'
            />
            <Button
              textColor='#fff'
              bgColor='#7950f2'
              onClick={handleNext}
              content='next'
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, content }) {
  return (
    <button
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
