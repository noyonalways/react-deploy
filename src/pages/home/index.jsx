import { Navbar } from "../../shared";

const Home = () => {
  return (
    <section>
      <Navbar />
      <div className="container">
        <img
          src="https://i.ibb.co/PtkQ7Zt/postman-pro-workshop.png"
          alt="banner-image"
        />

        <h1 className="text-2xl font-bold text-center my-3">
          Pro Postman Workshop by Stack Learner
        </h1>

        <div className="flex justify-center gap-1 flex-wrap">
          <a href="https://github.com/noyonalways/postman-workshop/fork">
            <img
              src="https://img.shields.io/badge/-Fork%20Repo-black.svg?style=flat-square&logo=github&color=555&logoColor=white"
              alt="fork-repo"
            />
          </a>
          <a href="https://github.com/noyonalways/postman-workshop">
            <img
              src="https://img.shields.io/badge/⭐%20Star%20Repo-gray"
              alt="star-repo"
            />
          </a>
          <img
            src="https://img.shields.io/github/contributors/noyonalways/postman-workshop"
            alt="github-contributors"
          />
          <img
            src="https://img.shields.io/github/commit-activity/t/noyonalways/postman-workshop/main?style=flat"
            alt="github-repo-commits"
          />
          <img
            src="https://img.shields.io/github/stars/noyonalways/postman-workshop?style=flat"
            alt="github-repo-stars"
          />
          <img
            src="https://img.shields.io/github/forks/noyonalways/postman-workshop?style=flat"
            alt="forks-repo"
          />
          <img
            src="https://img.shields.io/github/followers/noyonalways?style=flat"
            alt="github-followers"
          />
          <img
            src="https://img.shields.io/github/directory-file-count/noyonalways/postman-workshop"
            alt="repo-files-count"
          />
          <img
            src="https://img.shields.io/github/repo-size/noyonalways/postman-workshop"
            alt="repo-size"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
