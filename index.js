function mondayWork(brandWork="coding-skills"){
    return `This Monday, I want to ${codingSkills}!`
  }
  
  function tuesdayProject(activity="go to site"){
    return `This Tuesday, I will ${activity}.`
  }
  
  function wrapAdjective(highlight){
      return function newfunc(adjective){
        return `You are ${highlight}${adjective}${highlight}!`
      }
  }
