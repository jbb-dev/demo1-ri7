import React from 'react';
import Avatar from './user/Avatar';
import Experiences from './user/Experiences';
import Identity from './user/Identity';
import Projects from './user/Projects';

const Cv = () => {

  const student = {
    firstname: "Jean-Baptiste",
    lastname: "Bouillat",
    age: 38,
    address: "2 rue du test",
    city: "Marseille",
    phoneNumber: "06 01 02 03 04",
  };


  return (
    <div>
      <div className='cv-header'>
        <Identity 
        {...student}
          // data={student}
          // firstname={student.firstname}
          // lastname="Bouillat"
          // age={38}
          // address={"2 rue du test"}
          // city={"Marseille"}
          // phoneNumber={"06 01 02 03 04"}   
        />
        <Avatar image={'https://www.01net.com/app/uploads/2022/09/Darth-vader-Star-WarsRon-Riccio.jpg'} />
      </div>
      <Experiences />
      <Projects />
    </div>
  );
};

export default Cv;