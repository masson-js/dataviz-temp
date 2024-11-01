"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import GrafContainer from "../components/grafcontainer";

// Define the type for the data
interface AppleData {
  name: string;
  apples: number;
}

// Sample data
const apples: AppleData[] = [
  { name: "tommy", apples: 3 },
  { name: "sandra", apples: 2 },
  { name: "vova", apples: 4 },
];

export default function Chart01() {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove();

    const xScale = d3
      .scaleBand()
      .domain(apples.map((d) => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(apples, (d) => d.apples) || 0])
      .range([height - margin.bottom, margin.top]);

    svg
      .selectAll("rect")
      .data(apples)
      .join("rect")
      .attr("x", (d) => xScale(d.name) || 0)
      .attr("y", (d) => yScale(d.apples))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => yScale(0) - yScale(d.apples))
      .attr("fill", "steelblue");

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));
  }, []);

  return (
    <GrafContainer>
      <svg ref={svgRef}></svg>
    </GrafContainer>
  );
}
