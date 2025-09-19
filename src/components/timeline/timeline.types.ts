type TimelineItem = {
  title: string;
  content: string; // this could be made ReactNode to pass children
};

export interface TimelineItemProps extends TimelineItem {
  index: number;
}

export interface TimelineProps {
  items: TimelineItem[];
}
