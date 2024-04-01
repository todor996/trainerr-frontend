import { faBars, faStar } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { Button } from 'react-daisyui';
import ButtonNav from './components/ButtonNavigation.component';
import { TrrInput } from '@shared/components/TrrInput.component';
import { Link } from 'react-router-dom';

export default function EditMeasuresPage(): JSX.Element {
  return (
    <>
      <header className="flex w-full  justify-between">
        <div className="navbar justify-between">
          {/* This should ba a logo instead */}
          <TrrIcon icon={faStar}></TrrIcon>
          <h4 className="text-xl font-bold">Measures</h4>
          <TrrIcon icon={faBars} className="invisible"></TrrIcon>
        </div>
      </header>
      <section className="overflow-y-scroll p-3">
        <h4 className="text-2xl font-semibold">Measurements</h4>
        <form>
          <div className="grid grid-cols-2 gap-4 py-5">
            <TrrInput label="Weight" />
            <TrrInput label="Height" />
          </div>
          <div className="grid grid-cols-3 gap-4 py-5">
            <TrrInput label="Waist" />
            <TrrInput label="Arms" />
            <TrrInput label="Hips" />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-10">
            <Button>
              <Link to="/client/profile">Cancel</Link>
            </Button>

            <Button className="bg-primary">
              <Link to="/client/profile">Save</Link>
            </Button>
          </div>
        </form>
      </section>

      <ButtonNav />
    </>
  );
}
