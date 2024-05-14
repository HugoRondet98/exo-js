
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const attendreDeuxSecondes = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  
  // Utilisation de la fonction asynchrone
  const sleep = async() => {
    console.log("Début de l'attente...");
    await attendreDeuxSecondes();
    console.log("Attente terminée !");
  };
  
  sleep();

module.exports = {sleep};