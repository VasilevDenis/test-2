export default function characterHealth(character) {
  const health = Number(character.health);
  if (health > 50) {
    return 'healthy';
  } else if (15 <= health && health <= 50) {
    return 'wounded';
  } else if (health < 15) {
    return 'critical';
  }
}
