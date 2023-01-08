import AppMonster from "../../AppMonster/Apps/src/App";
import Header from "../../components/Header/Header";

export function MonsterApp(props) {
  return (
    <>
      <Header user={props.user} setUser={props.setUser} />
      <AppMonster save={props.save}/>
    </>
  );
}
