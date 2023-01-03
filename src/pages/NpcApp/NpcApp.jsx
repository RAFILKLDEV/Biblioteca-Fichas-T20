import AppNpc from "../../AppNpcs/src/AppNpc";
import Header from "../../components/Header/Header";

export function NpcApp(props) {
  return (
    <>
      <Header user={props.user} setUser={props.setUser} />
      <AppNpc />
    </>
  );
}
