import React from 'react';

const Blog = () => {
    return (
        <div className='mx-10'>
            <h1 className='text-4xl font-medium text-center my-10'><span className='relative my-underline'>Blog</span></h1>
            <div>
                <h2 className='text-xl font-bold mb-5'> 1. Difference between javascript and nodejs-</h2>
                <p><span className='relative my-underline font-semibold'>Answer: </span>
                    <br />
                    <br />
                    <span className='font-bold'> JavaScript:</span> JavaScript is a programming language. It is running in any web browser with a browser engine like Spider monkey , JavaScript Core , V8 depends on web browser. It is mainly used for client side maintaining. JavaScript is normally following Java Programming language standard. There may have some different way of writing code, but at the same time, we can say it following the Java Programming language standard.

                    <br />
                    <br />
                    <span className='font-bold'> Node: </span> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. It can be use both backend and font end , But it usually used in server side. node JS is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.  Node JS is very much familiar to create a specific binding with the file system and allows the developer to read or sometimes write on disk.
                </p>
            </div>

            <div>
                <h2 className='text-xl font-bold my-5'> 2. Difference between SQL and NoSQL --</h2>
                <p><span className='relative my-underline font-semibold'>Answer: </span>
                    <br />
                    <br />
                    <span className='font-bold'> SQL :</span>Provide High-Performance Capabilities
                    SQL is a powerful tool as it is highly compatible with all types of RDBMS like MySQL, SQL Server, Oracle Database, MS Access, etc.
                    Data Consistency: SQL adheres to ACID properties with a strict schema that ensures better data consistency.
                    Ensures Vertical Scalability
                    Handle Large Transactions with efficiency
                    Robust Security Measures like rigid schema, data consistency, data integrity, regular updates, etc.
                    Suitable for every type of organization – large or small.
                    SQL is easy to learn and manage
                    Open Source Programming Language
                    Supports Data Definition Language and Data Manipulation Language to query the databases

                    <br />
                    <br />
                    <span className='font-bold'> NoSQL: </span> NoSQL has higher scalability than other database management systems
                    Schema Free: You do not need to define the schema of the database before storing the data onto the system.
                    NoSQL allows the distribution of data on more than just one device.
                    With NoSQL Database, you do not require specialized or complex hardware or storage solutions.
                    Does not require data normalization
                    Simple API for easy user interfaces
                    Can store unstructured, semi-structured, or structured data.
                </p>
            </div>
            <div>
                <h2 className='text-xl font-bold my-5'> 2. What is the purpose of jwt and how does it work?</h2>
                <p><span className='relative my-underline font-semibold'>Answer: </span>
                    <br />
                    <br />
                    JWT means JSON Web Token. It mainly used for authentication. After a user login in to a application , the application will create a JWT and send back to the user .The token tells the server what routes, services, and resources the user is allowed to access. The token tells the server where the users have the access to the information of the website.
                    <br />
                    It also allows users to exchange and visit different domain of a web application by give them a token
                </p>
            </div>
        </div>
    );
};

export default Blog;