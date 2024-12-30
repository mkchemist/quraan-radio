import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { httpQuery, useGet } from "../../plugins/use-fetch";
import { tadaborUrl } from "../../constants/api";
import PreLoader from "../../components/PreLoader/PreLoader";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

function Tadabor() {
  let { t } = useTranslation();
  let { data, loading, error } = useGet(tadaborUrl, {
    transform: (data) => data.tadabor,
  });

  let [playback, setPlayback] = useState(null);

  const getRandomVideo = () => {
    if (!data) return;
    let keys = Object.keys(data);
    let parentKey = keys[Math.floor(Math.random() * keys.length)];
    let parent = data[parentKey];
    let child = parent[Math.floor(Math.random() * parent.length)];
    setPlayback(child);
  };

  useEffect(() => {
    getRandomVideo();
  }, [data]);

  const nextVideo = () => {
    getRandomVideo();
  };

  if (loading) {
    return <PreLoader></PreLoader>;
  }

  if (error) {
    return <ErrorBoundary error={error} />;
  }

  return (
    <div>
      <div>
        <p className="text-3xl">{t("services.tadabor")}</p>
        {playback && (
          <div>
            <video
              src={playback.video_url}
              className="w-full aspect-video"
              controls
              autoPlay
              onEnded={nextVideo}
            ></video>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tadabor;
