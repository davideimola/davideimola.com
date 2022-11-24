import { SEO } from "../components/seo";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { events, Event } from "../data/events";
import { Listbox } from "@headlessui/react";

const eventTypes = [
  "all",
  ...new Set(events.map((event) => event.type.valueOf())),
];
const eventLanguages = [
  "all",
  ...new Set(events.map((event) => event.language.valueOf())),
];
const eventCountries = [
  "all",
  ...new Set(events.map((event) => event.country)),
];

function formatLocation(e: Event): string {
  if (!e.city) {
    return e.country;
  }

  return `${e.city}, ${e.country}`;
}

interface SelectProps {
  values: string[];
  title: string;
  onSelect: Dispatch<SetStateAction<string>>;
}

function Select({ values, onSelect, title }: SelectProps) {
  const [selected, setSelected] = useState(values[0]);

  useEffect(() => {
    onSelect(selected);
  }, [selected]);

  return (
    <div className="relative">
      <div className="mb-4 text-center">{title}</div>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="px-1 py-1 border-2 border-indigo-600 rounded-xl w-full capitalize">
          {selected}
        </Listbox.Button>
        <Listbox.Options className="bg-white border-2 absolute w-full rounded-xl max-h-30 overflow-auto shadow-lg">
          {values.map((value) => (
            <Listbox.Option
              className="capitalize cursor-pointer py-1 hover:bg-indigo-50"
              key={value}
              value={value}
            >
              {value}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default function Talks() {
  const [selectedEventType, setSelectedEventType] = useState("all");
  const [selectedEventLanguage, setSelectedEventLanguage] = useState("all");
  const [selectedEventCountry, setSelectedEventCountry] = useState("all");

  const filteredEvents = events
    .filter(
      (event) => selectedEventType === "all" || event.type === selectedEventType
    )
    .filter(
      (event) =>
        selectedEventLanguage === "all" ||
        event.language === selectedEventLanguage
    )
    .filter(
      (event) =>
        selectedEventCountry === "all" || event.country === selectedEventCountry
    )
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <>
      <SEO title="Talks" />
      <Nav />

      <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              My Talks
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Here you can find a full list of my public activities
            </p>
          </div>
          <div className="m-auto mt-6 px-4 md:px-0">
            <div className="text-center hidden md:block">
              <div className="grid md:grid-cols-3 gap-10 my-6">
                <Select
                  values={eventTypes}
                  title="Type"
                  onSelect={setSelectedEventType}
                />
                <Select
                  values={eventLanguages}
                  title="Spoken language"
                  onSelect={setSelectedEventLanguage}
                />
                <Select
                  values={eventCountries}
                  title="Event country"
                  onSelect={setSelectedEventCountry}
                />
              </div>
            </div>

            <table className="m-auto full-width">
              <th>
                <td>Date</td>
                <td>Event name</td>
                <td>Talk</td>
                <td>Location</td>
              </th>
              {filteredEvents.map((e, i) => (
                <tr key={i}>
                  <td>{e.date.toString()}</td>
                  <td>{e.name}</td>
                  <td>{e.title}</td>
                  <td>{formatLocation(e)}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
