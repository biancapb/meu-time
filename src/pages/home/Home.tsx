import { useContext } from "react";
import UserContext from "../../data/contexts/user";
import { GetTeamStatistic } from "../../data/services/team-statistic";
import LayoutHome from "../../ui/components/LayoutHome/LayoutHome";

const Home = () => {
  const { state } = useContext(UserContext);
  function getTeamStatistic() {
    GetTeamStatistic("33", "2019", "39", state.keyAuth);
  }

  return (
    <div>
      <LayoutHome />
    </div>
  );
};

export default Home;
