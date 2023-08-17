import { updateHomeState } from "../../store/home/home.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks.store";

// TODO: Create Snippet for React Functional Component
export function Home(): JSX.Element {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.home.userName);

  function updateUserName(userName: string): void {
    dispatch(updateHomeState({ userName }));
  }
  return (
    <div className="flex-col p-4 border border-solid border-yellow-600 rounded">
      <h2 className="text-2xl my-2 font-medium">Home.page.tsx</h2>
      <label className="flex flex-col max-w-xs">
        <span>Guest</span>
        <input
          className="border border-solid border-gray-600 rounded p-1"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(event) => updateUserName(event.target.value)}
        />
      </label>
    </div>
  );
}
