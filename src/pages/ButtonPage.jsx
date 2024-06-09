import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div>
      <div>
        <Button primary onClick={handleClick} className="mb-5">
          <GoBell />
          Click me !
        </Button>
      </div>
      <div>
        <Button primary outline>
          Click me !
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Click me !
        </Button>
      </div>
      <div>
        <Button primary outline rounded>
          Click me !
        </Button>
      </div>
      <div>
        <Button secondary>Click me again!</Button>
      </div>
      <div>
        <Button success>Do not Click me!</Button>
      </div>
      <div>
        <Button success outline>
          <GoDatabase />
          Do not Click me!
        </Button>
      </div>
      <div>
        <Button warning>So much CLicking</Button>
      </div>
      <div>
        <Button danger>
          <GoCloudDownload />
          So much Licking
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
