
import React from 'react';
import scheduler from '../assets/photos/scheduler.png';
import team from '../assets/photos/team.png';
import note from '../assets/photos/note.png';
import password from '../assets/photos/password.png';
import timed  from '../assets/photos/timed.png';
import accord from '../assets/photos/accord.png';
import one from '../assets/photos/one.png';
import robotic from '../assets/photos/robotic.png';


export default function Projects() {
  return (
    <ul>
      <h1 id="projects">Projects</h1>
      <br/>  
      <div className="container">
        <div className="row">
        <div className="col-md-4">
          <div
  className="card mx-auto mb-4"
  style={{
    position: "relative",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.1)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
    <a href="https://sofiasosa92.github.io/work-day-scheduler/">
      <img src={scheduler}
        className="card-img-top"
        alt="scheduler"
        style={{ height: "220px", width: "415px", objectFit: "cover" }}
      />
      </a>
      <div className="card-body text-center">
                <h5 className="card-title">Work Day Scheduler</h5>
      </div>
  </div>
</div>


          


    <div className="col-md-4">
          <div
  className="card mx-auto mb-4"
  style={{
    position: "relative",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.1)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
    <a href="https://github.com/sofiasosa92/Team-Profile-Generator">
      <img src={team}
        className="card-img-top"
        alt="team"
        style={{ height: "220px", width: "415px", objectFit: "cover" }}
      />
      </a>
      <div className="card-body text-center">
                <h5 className="card-title">Team Profile Generator</h5>
      </div>
  </div>
</div>


<div className="col-md-4">
          <div
  className="card mx-auto mb-4"
  style={{
    position: "relative",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.1)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
    <a href="https://github.com/sofiasosa92/Note-Taker-Express.js">
      <img src={note}
        className="card-img-top"
        alt="note"
        style={{ height: "220px", width: "415px", objectFit: "cover" }}
      />
      </a>
      <div className="card-body text-center">
                <h5 className="card-title">Note Taker</h5>
      </div>
  </div>
</div>



<div className="col-md-4">
          <div
  className="card mx-auto mb-4"
  style={{
    position: "relative",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.1)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
    <a href="https://sofiasosa92.github.io/password-generator/">
      <img src={password}
        className="card-img-top"
        alt="password"
        style={{ height: "220px", width: "415px", objectFit: "cover" }}
      />
      </a>
      <div className="card-body text-center">
                <h5 className="card-title">Password Generator</h5>
      </div>
  </div>
</div>




<div className="col-md-4">
          <div
  className="card mx-auto mb-4"
  style={{
    position: "relative",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.1)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
    <a href="https://sofiasosa92.github.io/timed-quiz/">
      <img src={timed}
        className="card-img-top"
        alt="timed"
        style={{ height: "220px", width: "415px", objectFit: "cover" }}
      />
      </a>
      <div className="card-body text-center">
                <h5 className="card-title">Timed Quiz</h5>
      </div>
  </div>
</div>
          

<div className="col-md-4">
          <div
  className="card mx-auto mb-4"
  style={{
    position: "relative",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.1)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
    <a href="https://github.com/sofiasosa92/Accord-App">
      <img src={accord}
        className="card-img-top"
        alt="accord"
        style={{ height: "220px", width: "415px", objectFit: "cover" }}
      />
      </a>
      <div className="card-body text-center">
                <h5 className="card-title">Accord App</h5>
      </div>
  </div>
</div>


<div className="col-md-4">
          <div
  className="card mx-auto mb-4"
  style={{
    position: "relative",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.1)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
    <a href="https://github.com/sofiasosa92/MVC-Tech-Blog-">
      <img src={one}
        className="card-img-top"
        alt="one"
        style={{ height: "220px", width: "415px", objectFit: "cover" }}
      />
      </a>
      <div className="card-body text-center">
                <h5 className="card-title">One Step Devs</h5>
      </div>
  </div>
</div> 

<div className="col-md-4">
          <div
  className="card mx-auto mb-4"
  style={{
    position: "relative",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.1)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
    <a href="https://robotic-renaissance.herokuapp.com/ ">
      <img src={robotic}
        className="card-img-top"
        alt="robotic"
        style={{ height: "220px", width: "415px", objectFit: "cover" }}
      />
      </a>
      <div className="card-body text-center">
                <h5 className="card-title">Robotic ReAIssance</h5>
      </div>
  </div>
</div>
        </div>
      </div>
    </ul>
  );
}

