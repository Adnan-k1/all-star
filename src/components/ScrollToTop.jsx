import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Setiap pindah halaman, mulai dari paling atas (bukan mempertahankan posisi scroll halaman sebelumnya).
// Kalau alamatnya memuat #bagian (mis. /#why-us), geser ke bagian itu.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Tunggu halaman selesai dirender sebelum mencari bagian yang dituju
      const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 100);
      return () => clearTimeout(timer);
    }
    // "instant" supaya tidak terlihat meluncur naik dari bawah saat CSS memakai smooth scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}