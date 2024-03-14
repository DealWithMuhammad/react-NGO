import { height } from "@mui/system";
import SectionHeader from "components/Common/SectionHeader";
import React from "react";
import { FacebookEmbed, InstagramEmbed } from "react-social-media-embed";

export default function FacebookPost() {
  return (
    <>
      <div className="bg-[#ededed]">
        <SectionHeader
          headerInfo={{
            title: "Facebook Posts",
            subtitle: "Facebook Posts",
            description: "Explore our Facebook latest posts",
          }}
        />
        <div
          className="my-10"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FReActMalaysia%2Fposts%2Fpfbid02kxioUYPiC61WmwTLa2YdkPPtsXNSLVCL2kGuiaC4VBqASEUnC1Cyz7yyGaEyjA9Nl&show_text=true&width=500"
            width="400"
            height="560"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="rounded-2xl"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FReActMalaysia%2Fposts%2Fpfbid02zpwkSzG4i3Za7do286tSw56WTMYaAjNqvqSLfRB3AkxoNevyMZfsJsBtuRM7FX73l&show_text=true&width=500"
            width="400"
            height="513"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="rounded-2xl"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FReActMalaysia%2Fposts%2Fpfbid0hJxsgnrsWrA4xUJpUTY9sqPCjxYv4vHm7hLjcwwXzLDnXGRPNncByoy4ZAX2BkGBl&show_text=true&width=500"
            width="400"
            height="587"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="rounded-2xl"
          ></iframe>
        </div>
        <div className="mt-10 mx-10">
          <SectionHeader
            headerInfo={{
              title: "Facebook Posts",
              subtitle: "Instagram Posts",
              description: "Explore our Instagram latest posts",
            }}
          />
          <div
            className="my-10"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <InstagramEmbed
              width={350}
              url="https://www.instagram.com/p/Cyf2r-0PKfq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/CyQPTaTx5qK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              width={350}
            />
            <InstagramEmbed
              width={350}
              url="https://www.instagram.com/p/Cyf4zkPPJZk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            />
          </div>
        </div>
      </div>
    </>
  );
}
