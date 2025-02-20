import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apolloClient from "@/utils/apolloClient";
import { getBlogQuery } from "@/models/Queries";
import IndianFlagBg from "@/assets/images/indian-flag-bg.png";
import Logo from "@/assets/images/logo.png";
import TiptapEditor from "@/components/shared/TiptapEditor";

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
  const { id } = useParams();

  const [blogData, setBlogData] = useState<Blog | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    apolloClient
      .query({
        query: getBlogQuery,
        variables: {
          id,
        },
      })
      .then((result) => {
        console.log(result);
        setBlogData(result.data?.blog);
        setLoading(false);
      })
      .catch((err) => {
        setError("Some error occured");
      });
  }, [id]);

  if (loading) return <>Loading</>;
  if (error) return <>Error</>;

  return (
    <div>
      <div className="relative">
        <span className="absolute inset-0 bg-[#055479]" />
        <img src={IndianFlagBg} className="w-full opacity-90" />
        <h1 className="absolute bottom-8 left-8 text-2xl font-bold text-white">
          Satyagraha 2.0
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        <img src={blogData?.filePath?.url} className="w-3/5  rounded-lg mb-2" />
        <div className="flex flex-col gap-2 w-4/5">
          <h1 className="text-2xl font-bold text-[#055479]">
            {blogData?.title}
          </h1>
          <TiptapEditor content={JSON.parse(blogData?.body || "{}")} />
        </div>
      </div>
      <div className="w-7/8 my-8 shadow-md mx-auto flex bg-white px-16 py-8 rounded-lg gap-4">
        <img src={Logo} className="w-24" />
        <div className="flex flex-col flex-1 justify-center">
          <h2 className="text-xl font-bold">Satyagraha 2.0</h2>
          <p className="text-justify text-sm leading-relaxed italic">
            Inspired by the past, committed to the future.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <button className="w-full text-[#055479] border border-[#055479] rounded-lg px-4 py-1 cursor-pointer">
            Write Views
          </button>
          <button className="w-full text-white bg-[#055479] rounded-lg px-4 py-1 cursor-pointer">
            Join the movement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

{
  /* <p className="text-sm leading-relaxed text-justify">
            In a world grappling with inequality, unemployment, marginalization,
            and the erosion of freedoms, Satyagraha 2.0 emerges as a
            progressive, youth-led movement dedicated to addressing these
            pressing challenges. Rooted in the timeless principles of India’s
            founding visionaries, this movement seeks to reignite the humanist
            ideals enshrined in the Indian Constitution. By blending Gandhian
            principles of non-violent resistance, truth, and compassion;
            Nehruvian values of secularism, scientific temper, and dialogue; and
            Ambedkar’s vision of social justice, equality, and empowerment,
            Satyagraha 2.0 aspires to inspire a new wave of civic
            responsibility, nation-building, and true emancipation.
          </p>
          <h3 className="text-lg font-bold text-[#055479]">Our Vision</h3>
          <p className="text-sm leading-relaxed text-justify">
            Satyagraha 2.0 is committed to preserving the core values of India’s
            Constitution, celebrating its rich multicultural diversity, and
            fostering the idea of unity in diversity. We advocate for justice,
            equal opportunity, social harmony, and inclusive economic progress
            for all. Our mission is to move beyond binary conflicts and spark
            transformative methods that address the root causes of societal
            issues, ensuring a more equitable and just future for every Indian.
          </p>
          <h1 className="text-2xl font-bold text-[#055479]">
            Why Satyagraha 2.0?
          </h1>
          <p className="text-sm leading-relaxed text-justify">
            India stands at a critical juncture in its contemporary history. The
            challenges we face are not just political or economic but also
            existential, threatening the very fabric of our democratic
            governance, social cohesion, and economic stability. Satyagraha 2.0
            recognizes the urgent need to counter regressive and divisive
            tactics employed by authoritarian regimes that thrive on
            polarization, hatred, and deceit. Such strategies undermine
            democratic institutions and erode the trust of citizens in the
            system.
            <br />
            Our movement is a call to action—a plea to reframe political
            discourse and hold governments accountable to substantive issues of
            public concern. Drawing from democratic theory, we emphasize the
            importance of transparency, accountability, and citizen engagement
            in sustaining a vibrant democracy. Satyagraha 2.0 is not just a
            movement; it is a collective effort to reclaim the democratic spirit
            of India.
          </p>
          <h3 className="text-lg font-bold text-[#055479]">Our Mission</h3>
          <ul className="text-sm leading-relaxed text-justify list-disc list-outside pl-4">
            <li>
              <b>Shaping Public Discourse and Policy:</b> We aim to contribute
              to a solution-driven movement that positively influences public
              discourse and government policies. By addressing critical
              socio-political and economic issues, we strive to ensure inclusive
              development, social justice, and active democratic participation.
            </li>
            <li>
              <b>Building an Empathetic Community:</b> Satyagraha 2.0 seeks to
              foster a community of informed, empathetic, and action-oriented
              individuals who embody the spirit of Satyagraha. Through
              non-violent resistance and constructive dialogue, we aim to
              inspire citizens to take ownership of their role in
              nation-building.
            </li>
          </ul>
          <h3 className="text-lg font-bold text-[#055479]">Our Concerns</h3>
          <ul className="text-sm leading-relaxed text-justify list-disc list-outside pl-4">
            <li>
              The rise of authoritarian tendencies that undermine democratic
              governance, social cohesion, and economic stability.
            </li>
            <li>
              The use of regressive and divisive tactics—rooted in hatred and
              deceit—by the current regime to consolidate power and weaken
              democratic institutions.
            </li>
            <li>
              The urgent need to reframe political discourse, holding
              governments accountable to substantive issues of public concern.
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-justify">
            These challenges demand a collective response. Satyagraha 2.0 is a
            call to action for all Indians who believe in the values of
            transparency, accountability, and citizen engagement—the
            cornerstones of a thriving democracy.
          </p>
          <h3 className="text-lg font-bold text-[#055479]">A Call to Action</h3>
          <p className="text-sm leading-relaxed text-justify">
            The vision of Satyagraha 2.0 can only be realized with the support
            and active participation of every citizen. This is not just a
            movement; it is a historic journey of nation-building, rooted in the
            principles of non-violence, truth, and compassion. <br />
            We urge all Indians to join us in this endeavor. Together, let us
            lead a non-violent, informed, and inclusive movement for a better
            India—one that upholds justice, celebrates diversity, and ensures
            equal opportunities for all.
          </p>
          <h3 className="text-lg font-bold text-[#055479]">Join Us</h3>
          <p className="text-sm leading-relaxed text-justify">
            Be a part of Satyagraha 2.0. Let us come together to build a nation
            that truly reflects the dreams of its founding fathers—a nation
            where every individual has the opportunity to thrive, and where
            diversity is celebrated as our greatest strength. Together, let’s
            lead the way for a brighter, more equitable future.
          </p> */
}
