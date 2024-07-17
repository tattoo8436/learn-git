import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import html2canvas from "html2canvas";
import { useRef } from "react";
import { Button } from "antd";

const React = () => {
  const elementRef = useRef(null);

  const handleTakeScreenshot = () => {
    const element = elementRef.current;
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        // const link = document.createElement('a');
        // link.href = imgData;
        // link.download = 'screenshot.png';
        // link.click();
        console.log({ imgData });
      });
    }
  };

  return (
    <div ref={elementRef}>
      <Button type="primary" onClick={handleTakeScreenshot}>
        Click
      </Button>

      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          resourceTimeGridPlugin,
        ]}
        initialView="resourceTimeGridDay"
        events={[
          { title: "Event 1", date: "2024-07-11 09:30", resourceId: "a" },
          { title: "Event 2", date: "2024-07-11 10:11", resourceId: "b" },
        ]}
        resources={[
          { id: "a", title: "Room A" },
          { id: "b", title: "Room B" },
        ]}
      />
    </div>
  );
};

export default React;
