"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Watchlist from "./Watchlist";

type WatchlistProps = React.ComponentProps<typeof Watchlist>;

interface SortableWatchlistItemProps extends Omit<WatchlistProps, "dragHandleProps"> {
  id: string;
}

export default function SortableWatchlistItem({ id, ...watchlistProps }: SortableWatchlistItemProps) {
  const { setNodeRef, transform, transition, attributes, listeners } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <Watchlist
        {...watchlistProps}
        dragHandleProps={
          { ...attributes, ...listeners } as unknown as React.HTMLAttributes<HTMLButtonElement>
        }
      />
    </div>
  );
}
