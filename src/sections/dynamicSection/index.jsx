/* eslint-disable react/prop-types */
import { Card } from "../../components/card";
import { SectionTitle } from "../../components/sectionTitle";
import "./style.scss";

export const DynamicSection = ({ title, data = [] }) => {
  return (
    <section className="dynamic-section">
      <SectionTitle>{title}</SectionTitle>
      <div className="wrapper">
        {data?.map((item, idx) => {
          return (
            <Card
              key={idx}
              title={item.title}
              desc={item.subtitle}
              img={item.img}
              price={item.price}
              disabled={!item.isAvailable}
            />
          );
        })}
      </div>
    </section>
  );
};
