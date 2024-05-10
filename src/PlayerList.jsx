import PlayerCard from "./PlayerCard";

function PlayerList({players}) {
  console.log(players);
  return (
    <div style={{display : "flex", justifyContent :"space-between"}}>
      {players?.map((e, i) => {
        return <PlayerCard key={i} e={e} />;
      })}
    </div>
  );
}

export default PlayerList;
