import React from "react";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  copyright?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterUrl?: string;
  twitterSite?: string;
}

function MetaTags({
  title = "CloudQuest: Gamified AWS Learning",
  description = "Learn Amazon Web Services (AWS) through interactive quizzes, challenges, and a progression system. Start your CloudQuest and become an AWS expert today!",
  keywords = "AWS, Amazon Web Services, cloud computing, cloud training, online learning, gamified learning, quizzes, challenges, cloud education, AWS certification, tech skills",
  author = "CloudQuest",
  copyright = `© ${new Date().getFullYear()} CloudQuest`,
  ogTitle = "CloudQuest: Gamified AWS Learning",
  ogDescription = "Learn Amazon Web Services (AWS) through interactive quizzes, challenges, and a progression system. Start your CloudQuest and become an AWS expert today!",
  ogImage = "/cloudquest-og.jpeg",
  ogUrl = "",
  twitterCard = "summary_large_image",
  twitterTitle = "CloudQuest: Gamified AWS Learning",
  twitterDescription = "Learn Amazon Web Services (AWS) through interactive quizzes, challenges, and a progression system. Start your CloudQuest and become an AWS expert today!",
  twitterImage = "",
  twitterUrl = "https://x.com/ossamaweb",
  twitterSite = "@ossamaweb",
}: MetaTagsProps) {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta name="author" content={author} />
      <meta name="copyright" content={copyright} />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:url" content={twitterUrl} />
      <meta name="twitter:site" content={twitterSite} />

      <meta name="robots" content="index, follow" />
    </>
  );
}

export default MetaTags;
