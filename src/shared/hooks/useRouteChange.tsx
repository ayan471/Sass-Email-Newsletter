import { useAtom } from "jotai";
import { sideBarActiveItem } from "@/app/config/constants";

const useRouterChange = () => {
  const [activeRoute, setActiveRoute] = useAtom(sideBarActiveItem);
  return { activeRoute, setActiveRoute };
};

export default useRouterChange;
