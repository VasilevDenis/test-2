export default function sortCharacters(characterList) {
  const sortedList = characterList.slice().sort((a, b) => b.health - a.health);
  return sortedList;
}

