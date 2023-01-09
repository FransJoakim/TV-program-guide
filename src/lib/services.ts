export const fetchProgramData = async () => {
  const programData = await fetch("http://localhost:1337/epg").then((data) =>
    data.json()
  );
  return programData;
};
