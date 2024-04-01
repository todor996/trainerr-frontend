import {
  faBars,
  // faPencil,
  // faScaleBalanced,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { TrrIcon } from '@shared/components/TrrIcon.component';
import { Avatar, Button } from 'react-daisyui';
import ButtonNav from './components/ButtonNavigation.component';
import { Link } from 'react-router-dom';

export default function ProfilePage(): JSX.Element {
  return (
    <section className="m-3">
      <header className="flex w-full  justify-between">
        <div className="navbar justify-between">
          {/* This should ba a logo instead */}
          <TrrIcon icon={faStar}></TrrIcon>
          <h4 className="text-xl font-semibold">username</h4>
          <TrrIcon icon={faBars}></TrrIcon>
        </div>
      </header>

      <h2 className="py-4 text-lg font-semibold">Andrew Huberman</h2>
      <div className="flex gap-4">
        <Avatar
          src="/src/assets/avatar1.jpg"
          shape="circle"
          border
          borderColor="primary"
          size="md"
          className="flex items-center"
        />
        <div className="flex flex-col">
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat
            officia minima sunt ex numquam autem? Dolores a ducimus magni est! Delectus.
          </p>
          <div className="flex gap-2 py-2">
            <p className="rounded-full bg-primary px-2 text-[10px] font-semibold">85kg</p>
            <p className="rounded-full bg-primary px-2 text-[10px] font-semibold">
              179cm
            </p>
            <p className="rounded-full bg-primary px-2 text-[10px] font-semibold">
              48 years
            </p>
            <p className="rounded-full bg-primary px-2 text-[10px] font-semibold">male</p>
          </div>
        </div>
      </div>

      <div className="my-4 grid grid-cols-2 gap-4">
        <Button size="sm">
          <Link to="/client/profile/edit-measure">Measure</Link>
        </Button>
        <Button size="sm">
          <Link to="/client/profile/edit-profile">Edit Profile</Link>
        </Button>
      </div>

      <h2 className="py-2 text-lg font-semibold">My Trainer</h2>
      <div className="my-3 rounded-md bg-gray-200 py-4 shadow-xl">
        <div className="flex gap-4">
          <Avatar
            src="/src/assets/avatar1.jpg"
            shape="circle"
            borderColor="primary"
            size="md"
            className="flex items-center p-3"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold">Jovan Jovanovic</h4>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat
              officia minima sunt ex numquam autem? Dolores a ducimus magni est! Delectus,
            </p>
          </div>
        </div>
      </div>
      <h2 className="py-2 text-lg font-semibold">My subscription plan</h2>
      <div className="flex gap-2 py-2">
        <p className="rounded-full bg-primary px-4 py-1 text-sm font-semibold">
          Training plan
        </p>
        <p className="rounded-full bg-primary px-4 py-1 text-sm font-semibold">
          Nutrition plan
        </p>
      </div>

      <ButtonNav />
    </section>
  );
}
