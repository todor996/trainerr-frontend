import { useAppDispatch, useAppSelector } from "../../store/hooks.store";
import { updateHomeState } from "./store/homeSlice.store";

export function Home(): JSX.Element {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.home.username);

  function updateUserName(username: string): void {
    dispatch(updateHomeState({ username }));
  }

  return (
    <div className="flex-col p-4 border border-solid border-yellow-600 rounded">
      <h2 className="text-2xl my-2 font-medium">Home.page.tsx</h2>
      <label className="flex flex-col max-w-xs">
        <span>Guest</span>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => updateUserName(event.target.value)}
        />
      </label>
    </div>
  );
}
