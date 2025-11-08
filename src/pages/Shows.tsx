import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { loadShows } from "../utils/loadShows";
import type { Show } from "../utils/loadShows";

export default function Shows() {
    const { language, languageData } = useLanguage();
    const pageTitle =
        languageData?.languages[language].pages.shows?.title ||
        "Shows | ago · new wave/electronica · stuttgart";
    const [shows, setShows] = useState<Show[]>([]);

    useEffect(() => {
        loadShows().then(setShows);
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("de-DE", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const sortedShows = [...shows].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        // Upcoming shows first, then past shows
        if (a.status === "upcoming" && b.status !== "upcoming") return -1;
        if (a.status !== "upcoming" && b.status === "upcoming") return 1;
        // Within same status, sort by date (upcoming: ascending, past: descending)
        if (a.status === "upcoming") return dateA - dateB;
        return dateB - dateA;
    });

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="Upcoming and past shows by ago"
                />
            </Helmet>
      <article className="post page type-page status-publish hentry">
        <div className="post-content clearfix">
          <div className="entry-content clearfix">
            <div className="shows-content two-column-layout">
              <div className="shows-image">
                <img
                  src="/assets/images/224298807_1257045991419536_391705679237384012_n-e1627328688953.jpg"
                  alt="ago shows"
                />
              </div>
              <div className="shows-list">
                            {sortedShows.length === 0 ? (
                                <article>
                                    <p>
                                        Momentan sind keine Shows geplant.
                                        <br />
                                        Bei Interesse bitte hier melden:{" "}
                                        <a href="mailto:mail@ago-band.info">
                                            mail@ago-band.info
                                        </a>
                                    </p>
                                </article>
                            ) : (
                                sortedShows.map((show, index) => (
                                    <article
                                        key={index}
                                        className={
                                            show.status === "past"
                                                ? "closed"
                                                : show.status === "cancelled"
                                                ? "cancelled"
                                                : ""
                                        }
                                    >
                                        <h2>
                                            {show.status === "cancelled" &&
                                                "[CANCELLED] "}
                                            {formatDate(show.date)}
                                            <br />
                                            {show.venue}
                                        </h2>
                                        {show.title && <h3>{show.title}</h3>}
                                        <p>
                                            {show.description && (
                                                <>
                                                    {show.description
                                                        .split("\n")
                                                        .map((line, i) => (
                                                            <span key={i}>
                                                                {line}
                                                                <br />
                                                            </span>
                                                        ))}
                                                </>
                                            )}
                                            {show.supportingActs &&
                                                show.supportingActs.length >
                                                    0 && (
                                                    <>
                                                        {show.supportingActs.map(
                                                            (act, i) => (
                                                                <span key={i}>
                                                                    + {act}
                                                                    <br />
                                                                </span>
                                                            )
                                                        )}
                                                    </>
                                                )}
                                            {show.links && (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }}
                                                >
                                                    <br />
                                                    {show.links.facebook && (
                                                        <a
                                                            href={
                                                                show.links
                                                                    .facebook
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            › Link zum Facebook
                                                            Event
                                                        </a>
                                                    )}
                                                    {show.links.tickets && (
                                                        <a
                                                            href={
                                                                show.links
                                                                    .tickets
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            › Tickets
                                                        </a>
                                                    )}
                                                    {show.links.organizer && (
                                                        <a
                                                            href={
                                                                show.links
                                                                    .organizer
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            › Link zum
                                                            Organisator
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </p>
                                    </article>
                ))
              )}
              </div>
            </div>
          </div>
        </div>
      </article>
        </>
    );
}
