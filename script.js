const copaAmerica2024 = {
    year: 2024,
    host_country: "Estados Unidos",
    teams: [
        {
            name: "Argentina",
            group: "A",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Canada",
            group: "A",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Chile",
            group: "A",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Peru",
            group: "A",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Ecuador",
            group: "B",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Jamaica",
            group: "B",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Mexico",
            group: "B",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Venezuela",
            group: "B",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Bolivia",
            group: "C",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Panamá",
            group: "C",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Uruguay",
            group: "C",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Estados Unidos",
            group: "C",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Brasil",
            group: "D",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Colombia",
            group: "D",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Costa Rica",
            group: "D",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
        {
            name: "Paraguay",
            group: "D",
            games_played: 0,
            pro_goals: 0,
            ag_goal: 0,
            points: 0
        },
    ]
};

//console.log(copaAmerica2024.teams)

const datos_copa_america = copaAmerica2024.teams;
    
 const recorrerpaices = datos_copa_america.map(({group,name})=>{
    const tupla_grupo = [group,name]
    return [group,name]
 });


  


