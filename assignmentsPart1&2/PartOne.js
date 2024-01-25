<html>
  <head></head>
  <body>
    <script>
      // Values and Variables
      const country = "India";
      const continent = "Asia";
      let population = "13";

      console.log(country);
      console.log(continent);
      console.log(population);

      const isIsland = false;
      let language = "english";

      // Data Types
      console.log(typeof isIsland);
      console.log(typeof population);
      console.log(typeof country);
      console.log(typeof language);

      // Basic Operators
      let halves = population / 2;
      console.log(halves);

      console.log(population++);

      console.log(population > 6);

      console.log(population < 33);

      let description =
        country +
        " is in " +
        continent +
        ", and its " +
        population +
        " million people speak " +
        language;

      console.log(description);

      // String and Template Literals
      description = `${country} is in ${continent}, and its ${population} million people speaks ${language}`;

      console.log(description);

      // if...else
      if (population > 33) {
        console.log(`${country}'s population is above average`);
      } else {
        console.log(
          `${country}'s population is ${33 - population} million below average`
        );
      }

      // Conversion and Coercion
      console.log("9" - "5"); //Outputs 4
      console.log("19" - "13" + "17"); //Outputs 617
      console.log("19" - "13" + 17); //Outputs 23
      console.log("123" < 57); //Outputs False
      console.log(5 + 6 + "4" + 9 - 4 - 2); //Outputs 1143

      //  Equality Operator
      let numNeighbours = prompt(
        "How many neighbour countries does your country have?"
      );

      if (Number(numNeighbours) == 1) {
        console.log("Only 1 border");
      } else if (numNeighbours > 1) {
        console.log("More than One borders");
      } else {
        console.log("No borders");
      }

      // Logical Operator
      if (language == "english" || language == "English") {
        if (population < 50) {
          if (isIsland == false) {
            console.log(`You should live in ${country}`);
          }
        }
      } else {
        console.log(`${country} does not meet your criteria`);
      }

      // Switch Statement

      switch (language) {
        case "chinese":
          console.log("MOST number of native speakers!");
          break;
        case "mandarin":
          console.log("MOST number of native speakers!");
          break;
        case "spanish":
          console.log("2nd place in number of native speakers");
          break;
        case "english":
          console.log("3rd place");
          break;

        case "hindi":
          console.log("Number 4");
          break;
        case "arabic":
          console.log("5th most spoken language");
          break;
        default:
          console.log("Great language too :D");
      }


      // ternary operator

      console.log(
        country +
          "'s population is " +
          (population > 33 ? "above" : "below") +
          " average"
      );



    </script>
  </body>
</html>
