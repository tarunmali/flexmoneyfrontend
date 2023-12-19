import SessionCard from "../components/SessionCard";
import { useJwt } from "react-jwt";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import LoginToBook from "../components/LoginToBook";

const Sessions = () =>{
    const accessToken=sessionStorage.getItem('accessToken');
    const validToken = useJwt(accessToken, "maybegeneraterandomly");
    // console.log(validToken.decodedToken.email);
    let email;
    if(validToken.decodedToken!=null){
        email=validToken.decodedToken.email;
        }
    
    //In Enrolllments table, find all rows where email=frontendEmail
    const [enrollments, setEnrollments] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchEnrollments = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_BACKEND}/Api/sessions/${email}`);
          if (response.ok) {
            const data = await response.json();
            setEnrollments(data);
          } else {
            console.error('Failed to fetch enrollments');
          }
        } catch (error) {
          console.error('Error during fetch:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchEnrollments();
    }, [email]);

    if (isLoading) {
        return <Loading />;
      }

    if(enrollments.length!=0){
        console.log(enrollments);
    }

    if(isLoading)   return <Loading/>
    
    return (
        !sessionStorage.getItem('accessToken') ?(
            <LoginToBook/>
          ):(<div >
                {enrollments.map((enrollment) => (
                     <div key={enrollment._id} className="about">
                    <SessionCard {...enrollment} />
                    </div>
                ))}
             </div>)

    )
}

export default Sessions;