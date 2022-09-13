import Image from 'next/image';
import securityImage from '../../../public/illustrations/banks.png';
import Button from '../../UI/Button';
import { CheckboxIcon } from '../../UI/Svgs';

const SecuritySection = () => {
  return (
    <section className="mb-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-4">
          <Image src={securityImage} alt="credit-card" />
        </div>
        <div className="px-4">
          <h1 className="w-2/3 text-2xl font-semibold mb-4 md:text-4xl">
            Industry-leading security from day one
          </h1>
          <p className="text-gray mb-7 md:w-2/3">
            Subject to cardholder and rewards terms which will be available at
            application.
          </p>
          <ul className="flex flex-col gap-y-4 ml-4 mb-8">
            <li>
              <div className="flex gap-x-3 items-center mb-4">
                <span>
                  <CheckboxIcon />
                </span>
                <span className="font-medium">Up to 3% back on purchases</span>
              </div>
              <p className="text-gray max-w-lg">
                NEFA is a licensed New York trust company that undergoes regular
                bank exams and is subject to the cybersecurity audits conducted
                by the New York Department of Financial Services. Learn more
                about our commitment to security.
              </p>
            </li>
            <li>
              <div className="flex gap-x-3 items-center mb-4">
                <span>
                  <CheckboxIcon />
                </span>
                <span className="font-medium">Hardware security keys</span>
              </div>
              <p className="text-gray max-w-lg">
                With NEFA you can secure your account with a hardware security
                key via WebAuthn.
              </p>
            </li>
            <li>
              <div className="flex gap-x-3 items-center mb-4">
                <span>
                  <CheckboxIcon />
                </span>
                <span className="font-medium">SOC Certifications</span>
              </div>
              <p className="text-gray max-w-lg">
                NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the
                world’s first cryptocurrency exchange and custodian to complete
                these exams.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default SecuritySection;
