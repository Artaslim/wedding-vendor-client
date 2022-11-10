import React from "react";

const Blog = () => {
  return (
    <>
      <div className=" rounded-2xl border-4 border-teal-700   p-4 mb-6">
        <h4 className="text-3xl font-semibold">
          Difference between SQL and NoSQL?
        </h4>
        <p className="text-2xl p-4 w-75 font-medium">
          <small>
            The Main Differences: <br />
            <strong> 1.Type –</strong> <br />
            SQL databases are primarily called as Relational Databases (RDBMS);
            whereas NoSQL database are primarily called as non-relational or
            distributed database.
            <br />
            2.<strong> Structure – </strong> <br />
            SQL databases are table-based on the other hand NoSQL databases are
            either key-value pairs,
            <br /> document-based, graph databases or wide-column stores. This
            makes relational SQL
            <br /> databases a better option for applications that require
            multi-row transactions such as an
            <br /> accounting system or for legacy systems that were built for a
            relational structure.
          </small>
        </p>
      </div>
      <div className=" rounded-2xl border-4 border-teal-700   p-4 mb-6">
        <h4 className="text-3xl font-semibold">
          What is JWT, and how does it work?
        </h4>
        <p className="text-2xl p-4 w-75 font-medium">
          <small>
            <strong> JWT–</strong> <br />
            or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
            <br />
            <strong> JWT </strong> <br />
            differs from other web tokens in that they contain a set of claims.
            Claims are used to transmit information between two parties. What
            these claims are depends on the use case at hand. For example, a
            claim may assert who issued the token, how long it is valid for, or
            what permissions the client has been granted. A JWT is a string made
            up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
          </small>
        </p>
      </div>
      <div className=" rounded-2xl border-4 border-teal-700   p-4 mb-6">
        <h4 className="text-3xl font-semibold">
          What is the difference between javascript and NodeJS?
        </h4>
        <p className="text-2xl p-4 w-75 font-medium">
          <small>
            The Main Differences: <br />
            1.<strong> NodeJS : –</strong> <br />
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
            <br />
            2.<strong> JavaScript : </strong> <br />
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.
          </small>
        </p>
      </div>
      <div className=" rounded-2xl border-4 border-teal-700   p-4 mb-6">
        <h4 className="text-3xl font-semibold">
          How does NodeJS handle multiple requests at the same time?
        </h4>
        <p className="text-2xl p-4 w-75 font-medium">
          <small>
            <strong> NodeJS:Multiple client requests –</strong> <br />
            Given a NodeJS application, since Node is single threaded, say if
            processing involves a Promise.all that takes 8 seconds, does this
            mean that the client request that comes after this request would
            need to wait for eight seconds? No. NodeJS event loop is single
            threaded. The entire server architecture for NodeJS is not single
            threaded.
            <br /> Before getting into the Node server architecture, to take a
            look at typical multithreaded request response model, the web server
            would have multiple threads and when concurrent requests get to the
            webserver, the webserver picks threadOne from the threadPool and
            threadOne processes requestOne and responds to clientOne and when
            the second request comes in, the web server picks up the second
            thread from the threadPool and picks up requestTwo and processes it
            and responds to clientTwo. threadOne is responsible for all kinds of
            operations that requestOne demanded including doing any blocking IO
            operations.
          </small>
        </p>
      </div>
    </>
  );
};

export default Blog;
