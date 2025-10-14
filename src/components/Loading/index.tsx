const Loading = ({ loading = false }: { loading?: boolean }) => {
  if (!loading) return;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-slate-400-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
