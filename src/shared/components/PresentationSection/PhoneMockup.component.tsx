import { Title } from '../Title/Title.component';
import './PhoneMochup.style.css';

export function PhoneMockup(): JSX.Element {
  return (
    <div className="mockup-phone-custom">
      <div className="camera-custom"></div>
      <div className="display-custom">
        <div className="phone-custom artboard artboard-demo">
          <Title />
        </div>
      </div>
    </div>

    // <div className="mockup-phone">
    //   <div className="camera"></div>
    //   <div className="display">
    //     <div className="artboard artboard-demo phone-1">
    //       <Title />
    //     </div>
    //   </div>
    // </div>
  );
}
