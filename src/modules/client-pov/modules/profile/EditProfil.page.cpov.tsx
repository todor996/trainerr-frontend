import { faBars, faStar } from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { TrrInput } from '@shared/components/TrrInput.component';
import { Avatar, Button, Toggle } from 'react-daisyui';
import ButtonNav from './components/ButtonNavigation.component';
import { Link } from 'react-router-dom';

export default function EditProfilePage(): JSX.Element {
  return (
    <>
      <header className="flex w-full  justify-between">
        <div className="navbar justify-between">
          {/* This should ba a logo instead */}
          <TrrIcon icon={faStar}></TrrIcon>
          <h4 className="text-xl font-bold">Edit profile</h4>
          <TrrIcon icon={faBars} className="invisible"></TrrIcon>
        </div>
      </header>

      <section className="overflow-y-scroll p-3">
        <form>
          <div className="flex gap-4">
            <Avatar
              src="/src/assets/avatar1.jpg"
              shape="circle"
              borderColor="primary"
              size="md"
              className="flex items-center"
            />
            <div className="flex w-full flex-col justify-evenly gap-4">
              <TrrInput label="First Name" size="sm" />
              <TrrInput label="Last Name" size="sm" />
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-10">
            <TrrInput label="Username" />

            {/* Should we create also as custom component */}
            <label className="label">Description</label>
            <textarea
              className="textarea textarea-bordered h-32"
              placeholder="Description"
            />

            <div className="grid grid-cols-2 gap-4">
              <TrrInput label="Gender" />
              <TrrInput type="date" label="Birthday" />
            </div>
            <div className="flex gap-2 pt-4">
              <Toggle size="lg" className="toggle-primary" />
              <p>Display Before & After Photos publicly</p>
            </div>
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
